import React, { useRef, useState } from "react";
import { Box, Menu, MenuButton, MenuItem, MenuList, Text, Button, HStack } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Editor } from "@monaco-editor/react";
import { LANGUAGE_VERSIONS, CODE_SNIPPETS } from "./Constants";
import Output from "./Output";
function CodeEditor() {
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <>
    <HStack >
      <Box w='50%'>
      <LanguageSelector onSelect={onSelect} language={language}/>
      <Box>
        <Editor
         options={{
          minimap: {
            enabled: false,
          },
        }}
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
        />
      </Box>
      </Box>
      <Output editorRef={editorRef} language={language}/>
    </HStack>
    </>
  );
}

export default CodeEditor;

function LanguageSelector({language,onSelect}) {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";

  return (
   <div>

  <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy bg="#110c1b">
      <MenuButton as={Button} bg="#110c1b" color="grey">{language} <ChevronDownIcon/></MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
            key={lang}
            color={lang === language ? ACTIVE_COLOR : ""}
            bg={lang === language ? "gray.900" : "transparent"}
            _hover={{
              color: ACTIVE_COLOR,
              bg: "gray.900",
            }}
            onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
    
        </div>
  );
}



// function Output({editorRef, language}){

//    function runCode(){
//    let sourceCode = editorRef.current.getValue(); 
//    console.log("Source Code:", sourceCode);
//   }
//   return(
//     <Box w="50%">
//       <Text mb={2} fontSize="lg">
//         Output
//       </Text>
//       <Button variant='outline' colorScheme="green" mb={4} onClick={()=>runCode()}> 
//         Run
//       </Button>
//       <Box
//       height="75vh"
//       p={2}
//       border="1px solid"
//       borderRadius={4}
//       borderColor="#333"
//       >

//       </Box>
//     </Box>
//   )
// }