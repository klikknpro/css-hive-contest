Block level elements:
- line break before + after
- has top & bottom margin
<address><article><aside><blockquote><canvas><dd>
<div>
<dl><dt>
<fieldset><figcaption><figure><footer><form>
<h1>-<h6>
<header><hr>
<main><nav><noscript>
<ol><ul><li>
<p>
<pre>
<section>
<table><tfoot><video>

Inline elements:
- does NOT have top & bottom margin
- canNOT contain a block element
- only the necessary width
<a>
<abbr><acronym><b><bdo><big>
<br>
<button>
<cite><code><dfn><em><i>
<img>
<input><kbd><label><map><object><output><q><samp><script><select><small>
<span><strong><sub><sup><textarea><time><tt><var>

Every element has a default "display" value:
- display: block
- display: inline
Changing its property will NOT change its original kind.

  - display: inline-block
    - does have top & bottom margin
    - width & height can be defined
    - no line break

=========================

<form> is a container for different form elements
  • most common is the <input> element
    • text, radio, submit, checkbox, button, ...
    https://www.w3schools.com/html/html_form_input_types.asp
    <label for="this"></label>
    <input id="this"></input>
    • checkbox
    <input name="mindegyik opcio ugyanaz">

=========================

Semantics = elements with a "meaning"

<article> (independent, self-contained content)
<aside> (indirectly realted to the main content)
<details><figcaption><figure><footer><header>
<main><mark><nav><section><summary><time>

=========================

<a> download-ot is tud
Don't use them as a "fake button", avoid "click" event listeners. Use real <button> instead.
For semantic purposes indicate what the link is doing. (ie.: This will open a new tab.)

=========================

margin: value, %, auto, inherit
margin: auto (horizontally center within its container)
margin: % (% of its parent element)

