const initialText = `<p align="center">
   <img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="30%" />
   <br />
   <h1 align="center">Preview Markdown</h1>
</p>

- [Markdown tutorial](https://www.youtube.com/watch?v=HUBNt18RFbo)
- [General Markdown syntax](https://gist.github.com/safe1981/2019322)
- [GitHub's Markdown syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Common Markdown mistakes](https://gist.github.com/DavidAnson/006a6c2a2d9d7b21b025)

## Instructions

- Start typing in the input box and Markdown will be rendered live in the output box!
- **Copy all the Markdown** in the input box to the clipboard by clicking the rightmost button at the top right corner of the input box.
- **Clear all the Markdown** in the input box by clicking the red 'X' (clear button) in the top right corner of the input box.

## Markdown Syntax

### 1. Headings

# Largest Heading
## Second Largest Heading
### Third Largest Heading
###### Smallest Heading

---

### 2. Styling Text

\`Inline code\`

*Italic text* or _Italic text_

**Bold text** or __Bold text__

_**Bold and italic text**_

or

***Bold and italic text***

**Bold with _italic nesting_**

~~Strikethrough text~~

> NOTE: Text is rendered on a new line only if there is an empty line in between.

---

### 3. Lists

- Unordered list
* Unordered list

1. Ordered list
1. Ordered list

- **Writing under the same list item**

  Add two to three whitespaces below a list item to render a paragraph under the list item

- **Unordered list nesting**
   - Unordered nested list item
   - Unordered nested list item
      - Unordered nested list item

1. **Ordered list nesting**
   1. Ordered nested list item
   1. Ordered nested list item
      1. Ordered nested list item

1. **Ordered and unordered list nesting**
   - Unordered nested list item
      1. Ordered nested list item
      1. Ordered nested list item
   - Unordered nested list item

> NOTE: Keep adding 3 whitespaces before hyphen for every level of nesting.

---

### 4. Hyperlinks

- Contribute to [Preview Markdown](https://harshkapadia2.github.io/preview-markdown/) on [GitHub](https://github.com/HarshKapadia2/preview-markdown)!
- Do [raise issues](https://github.com/HarshKapadia2/preview-markdown/issues) if any bugs are found.
- [Relative link to the \`Images\` section below.](#5-images)
- [Relative link to Preview Markdown's logo.](/preview-markdown/logo.svg)

---

### 5. Images

![Alt text]()

![Absolute link](https://user-images.githubusercontent.com/50140864/121142987-2ba86480-c85a-11eb-82bf-16621156b329.png)

![Relative link](/preview-markdown/logo.svg)

<img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="10%" />

---

### 6. Quoting Text

In the words of [Selena Gomez](https://www.selenagomez.com/):

> "Kindness always wins."

Also,

> Quoted text
>
>> Nested quote

---

### 7. Quoting Code

\`\`\`javascript
let message = "Thank you for using Preview Markdown!";
console.log(message);
\`\`\`

---

### 8. Task Lists

- [x] Complete task
   - [x] Complete task
   - [x] Complete task
- [ ] Incomplete task

---

### 9. Escaping Markdown Syntax

*The asterisks should be rendered.*

This is how it is done: \*The asterisks should be rendered.\*


Characters that can be escaped with a backslash (\`\\\`) before them:
- \\   backslash
- \`   backtick
- \\*   asterisk
- \_   underscore
- \{\}  curly braces
- \[\]  square brackets
- \(\)  parentheses
- \\#   hash mark
- \\+   plus sign
- \\-   minus sign (hyphen)
- \.   dot
- \!   exclamation mark

---

### 10. Tables

Table head | Table head
---------- | ----------
foo | bar
| bar
foo
bar | foo

---

### 11. Misc

#### Horizontal Rule

---
or
***
or
<hr />
can be used.

#### Line Break

Text can rendered on a new line

by adding an empty line in between.

Lines can also be broken and images can be spaced<br />using the \`<br />\` tag.

#### Bold And Italic Tags

This text is <b>bold</b>, just like **this text**.

This text is in <i>italics</i>, just like *this text*.

#### Paragraph Tag

The paragraph tag (\`<p></p>\`) can be used with the \`align\` attribute to align items to the center.

Eg:

<p align="center">
   This text is center aligned!
   <br />
   **Markdown syntax** will <b>not</b> work within a 'p' tag.
   <br />
   <img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="20%" />
</p>

---

<p align="center">
   Thank you for using Preview Markdown!
</p>
`;

export default initialText;
