const initialText = `# Preview Markdown

- [Markdown tutorial](https://www.youtube.com/watch?v=HUBNt18RFbo)
- [General Markdown syntax](https://gist.github.com/safe1981/2019322)
- [GitHub's Markdown syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Common Markdown mistakes](https://gist.github.com/DavidAnson/006a6c2a2d9d7b21b025)


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
      1. Unordered nested list item
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

Enjoy writing Markdown! Thank you for using Preview Markdown!
`;

export default initialText;
