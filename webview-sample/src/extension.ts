// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "webview-sample" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World!");
      //   console.log(context.extensionPath);
      Mypage.createOrShow(context.extensionPath);
    }
  );

  context.subscriptions.push(disposable);
}

class Mypage {
  public static createOrShow(extensionPath: string) {
    // 当前active页面的相关信息
    const activeEditor = vscode.window.activeTextEditor;
    // 激活页面所在编辑器列,如果为两栏布局,右边激活,值就为2
    const columns = activeEditor ? activeEditor.viewColumn : undefined;

    console.log(activeEditor, columns);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
