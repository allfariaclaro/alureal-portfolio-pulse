const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const {randomUUID}=require('node:crypto');
const source=fs.readFileSync('pulse-app.js','utf8');
function app(blocked=false){
 const seed=[{id:'seed',title:'Seed',status:'todo'}],values=new Map();
 const context=vm.createContext({window:{PULSE_DATA:{tasks:seed}},document:{readyState:'loading',addEventListener(){}},crypto:{randomUUID},localStorage:{getItem:k=>values.get(k)??null,setItem:(k,v)=>{if(blocked)throw Error('blocked');values.set(k,v)}}});
 vm.runInContext(source,context);return {run:s=>vm.runInContext(s,context),seed,values};
}
test('title validation, demo defaults, unique IDs, seed preservation',()=>{
 const a=app();assert.equal(a.run("demoTask('   ')"),null);assert.equal(a.run("demoTask('x'.repeat(121))"),null);assert.equal(a.run("demoTask('x'.repeat(120)).title.length"),120);
 const t=a.run("demoTask('  <b>Demo</b>  ')");assert.equal(t.title,'<b>Demo</b>');assert.equal(t.project,'Demonstração');assert.equal(t.owner,'Não atribuído');assert.equal(t.status,'todo');assert.equal(t.due,'Sem prazo');assert.equal(t.priority,'Média');assert.notEqual(t.id,a.run("demoTask('Demo')").id);
 a.run("saveTasks([...tasks(),demoTask('Demo')])");assert.equal(a.run('tasks().length'),2);assert.equal(a.seed.length,1);assert.equal(JSON.parse(a.values.get('pulse-tasks-v2')).length,2);
});
test('storage failure retains tasks in current session',()=>{const a=app(true);assert.equal(a.run("saveTasks([...tasks(),demoTask('Demo')])"),false);assert.equal(a.run('tasks().length'),2);assert.equal(a.values.size,0)});
test('task text is escaped in dashboard',()=>{
 const a=app(),markup=a.run(`taskMarkup({title:'<img src=x onerror="bad()">',project:'A&B',due:'<script>',priority:"'high'"})`);
 assert.ok(markup.includes('&lt;img'));assert.ok(markup.includes('A&amp;B'));assert.ok(!markup.includes('<img'));
 assert.equal(a.run(`escapeText('<>&"')`),'&lt;&gt;&amp;&quot;');
});
