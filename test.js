const { renderer, test } = require('./src');

// level 1
console.log("\nlevel 1")
const div = renderer();
test("div", div.element());
test("<div></div>", div());

// level 2
console.log("\nlevel 2")
const p = renderer();
p.element('p');
test("p", p.element());
test("<p></p>", p());

// level 3
console.log("\nlevel 3")
test("<p>Text</p>", p("Text"));

// level 4
console.log("\nlevel 4")
test("<p>Another text</p>", renderer().element("p")("Another text"));

// level 5
console.log("\nlevel 5")
const body = renderer()
 .element("body")
 .attr("style", "background: red")
 .attr("class", "body");
test("background: red", body.attr("style"));
test('<body style="background: red" class="body"><p>Text</p></body>', body(
  p("Text")
));
