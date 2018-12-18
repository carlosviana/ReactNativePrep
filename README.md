# ReactNativePrep

Como prepara uma estrutura básica para um projeto React Native

## Intalando e inicializando o react-native

Garanta que o _NodeJs, npm e yarn_ esteja instalados.

Para criar a estrutura do react-native é necessário instalar a biblioteca **react-native-cli**

```bash
yarn global react-native-cli
OU
npm install -g react-native-cli
```

Crie uma estrutura inicial par o projeto

```bash
react-native init NOME_DO_PROJETO
```

Para testar instale os emuladores de Android ou iOS de preferência.

Pode executar o projeto para testar de está tudo ok na intalação e nos emuladores

### Android

```bash
react-native run-android
```

### iOS

```bash
react-native run-ios
```

## Preparando VSCode

Para padronizar utilizaremos algumas extensões no VSCode

-   EditorConfig
-   Eslint
-   Pretty

### EditoConfig

1. Intale a extensão _EditorConfig_

2. Criem um arquivo **.editorconfig** na pasta raiz do projeto

3. Preencha com essas informações

```
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Instale o Eslint

O Eslint irá marcar os erros dos arquivos javascript para malertar e manter padronizado seu código.

1. Instale a biblioteca

```bash
yarn add eslint -D
```

2. Inicie a biblioteca no projeto

```bash
yarn eslint --init
```

-> Escolha a opções

-   Usa a popular style guide
-   Airbnb
-   Do you use React(y/N): Y
-   Format do config file: **JSON**
-   E Y para instalar via **npm**

3. Instale plugins necessários para o Eslint

```bash
 yarn add babel-eslint eslint-plugin-react-native -D
```

4. Crie um arquivo **.eslintrc.json** na raiz do projeto e preecha com as informações

```json
{
    "parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react-native/all"],
    "plugins": ["react-native", "jsx-a11y", "import"],
    "env": {
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".jsx", ".js"]
            }
        ],
        "import/prefer-default-export": "off"
    },
    "globals": {
        "__DEV__": true
    },
    "settings": {
        "import/resolver": {
            "babel-plugin-root-import": {}
        }
    }
}
```

5. Intale a extensão **eslint** no VSCode

### Instale e ative a extensão Prettier

o prettier vai trabalhar junto com o eslint a seu favor. Ele vai automaticamente formatar seu código de acordo com as regras de padronização do eslint.

1. Instale a extensão **prettier - code formatter** no VSCode
2. Configure os settings do VSCode
    - habilite -> _prettier.eslintIntegration:_ true
    - habilite -> _editor.formatOnSave:_ true

## Pasta src do projeto

1. Crie a pasta src na raiz do projeto, é lá que todo o código de desenvolviment irá ficar.
2. Mova o arquivo App.js para a pasta **./src**
3. Renomeie o arquivo para _index.js_
4. Na raiz do projeto edite o arquivo _index.js_

Altere a linha **import App from './App';** para:

```javascript
import App from "./src";
```

## Instalando PropTypes

Instale o pacote propTypes

```bash
yarn add prop-types
```

## Melhorando a navegação entre pastas _BabelRootImport_

1. Instale o plugin do babel

```bash
yarn add babel-plugin-root-import -D
```

1. Edite o arquivo _.babelrc_

```json
{
    "presets": ["module:metro-react-native-babel-preset"],
    "plugins": [
        [
            "babel-plugin-root-import",
            {
                "rootPathSuffix": "src"
            }
        ]
    ],
    "env": {
        "production": {
            "plugins": [
                "babel-plugin-root-import",
                {
                    "rootPathSuffix": "src"
                }
            ]
        }
    }
}
```

1. Para evitar erro no eslint. Instale:

```bash
yarn add eslint-import-resolver-babel-plugin-root-import -D
```

1. Configure a navegação com Ctrl do VSCode
    1. Crie o arquivo _jsConfig.json_ com as seguintes informações

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": ["src/*"]
        }
    }
}
```

## Configurando as ferramentas para DEBUG

### Reactotron

1. Baixe uma release do **Reactotron**
2. Intale o pacote reactotron para o react-native

```bash
yarn add reactotron-react-native
```

3. Crie uma pasta **Config** em './src'
4. Crie um arquido para configurar o Reactotron _ReactotronConfig.js_ e preenche com:

```javascript
import Reactotron from "reactotron-react-native";

if (__DEV__) {
    const tron = Reactotron.configure() // controls connection & communication settings
        .useReactNative() // add all built-in react native plugins
        .connect(); // let's connect!

    console.tron = tron;

    tron.clear();
}
```

5. Informe o reactotron no arquivo _'./src/index.js'_

```javascript
import "./config/ReactotronConfig";
```

### React-devtools

1. Instale o pacote react-devtools

```bash
yarn add react-devtools --dev
```

2. Crie o arquivo _./src/config/DevToolsConfig.js_ e coloque nele:

```javascript
if (__DEV__) {
    require("react-devtools");
}
```

3. Informe o devtools no arquivo _'./src/index.js'_

```javascript
import "./config/DevToolsConfig";
```

4. Altere o arquivo _package.json_ na sesção _script_

```json
"scripts": {
        "start": "node node_modules/react-native/local-cli/cli.js start",
        "test": "jest",
        "react-devtools": "react-devtools"
    },
```

Agora pode executar o react-devtools com o comando no terminal:

```bash
yarn run react-devtool
```
