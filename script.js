
// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "01ARIB007X";
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 33);

// LESSON SYSTEM
function show(type) {

let content = "";

// HTML
if (type === "html") {
content = `
<h2>📘 HTML COMPLETE GUIDE</h2>

<p>HTML is used to structure websites.</p>

<h3>🏷️ Important Tags</h3>
<ul>
<li>&lt;h1&gt; - Heading</li>
<li>&lt;p&gt; - Paragraph</li>
<li>&lt;a&gt; - Link</li>
<li>&lt;img&gt; - Image</li>
<li>&lt;button&gt; - Button</li>
</ul>

<h3>💻 Example</h3>
<pre>
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;My website&lt;/p&gt;
</pre>
`;
}

// CSS
if (type === "css") {
content = `
<h2>🎨 CSS COMPLETE GUIDE</h2>

<p>CSS styles your website.</p>

<h3>🎯 Properties</h3>
<ul>
<li>color</li>
<li>background</li>
<li>margin</li>
<li>padding</li>
<li>border</li>
</ul>

<h3>💻 Example</h3>
<pre>
body {
  background: black;
  color: white;
}
</pre>
`;
}

// JS
if (type === "js") {
content = `
<h2>⚡ JAVASCRIPT GUIDE</h2>

<p>JS makes websites interactive.</p>

<h3>🧠 Concepts</h3>
<ul>
<li>Variables</li>
<li>Functions</li>
<li>Events</li>
<li>Conditions</li>
</ul>

<h3>💻 Example</h3>
<pre>
let x = 10;
function test(){
  alert(x);
}
</pre>
`;
}

document.getElementById("content").innerHTML = content;

}