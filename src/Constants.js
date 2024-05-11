export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  
  export const CODE_SNIPPETS = {
    javascript: `\nfunction helloFromSubhaRanjan(name) {\n\tconsole.log("Hello from " + name + ",");\n}\n\nhelloFromSubhaRanjan("Subha Ranjan Bhowmick");\nconsole.log("Enjoy coding in Javascript 🧑‍💻")`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction helloFromSubhaRanjan(data: Params) {\n\tconsole.log("Hello from " + data.name + "");\n}\n\nhelloFromSubhaRanjan({ name: "Subha ranjan Bhowmick," });\n\nconsole.log("Enjoy coding in Typescript 🧑‍💻");\n`,
    python: `\ndef helloFromSubhaRanjan(name):\n\tprint("Hello from " + name + ",")\n\nhelloFromSubhaRanjan("Subha Ranjan Bhowmick")\nprint("Enjoy coding in Python 🧑‍💻")`,
    java: `\npublic class HelloFromSubhaRanjan {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello from Subha Ranjan Bhowmick,");\n\t\tSystem.out.println("Enjoy coding in Java !!!");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloFromSubha\n{\n\tclass HelloFromSubhaRanjan { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello from Subha Ranjan Bhowmick,");\n\t\t\tConsole.WriteLine("Enjoy coding in C# !!!");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$helloFromSubha = 'Hellow from Subha Ranjan Bhowmick';\necho $helloFromSubha;\necho '\nEnjoy coding in PHP 🧑‍💻';\n?>",
  };