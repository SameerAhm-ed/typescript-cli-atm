import inquirer from "inquirer";

const userName: string = "admin";
const userPin: number = 1234;

let balance: number = Math.floor(Math.random() * 1000);
let withdraw: number;
let deposit: number;
let enterUser!: string;
let enterPin!: number;
let enterOp;

const askUserInfo = async () => {
  const info = await inquirer.prompt([
    {
      name: "username",
      type: "string",
      message: "Enter Your Username: ",
    },
    {
      name: "userpin",
      type: "number",
      message: "Enter Your UserPin: ",
    },
    {
      name: "options",
      type: "list",
      message: "Select your options:",
      choices: ["Withdraw", "Deposit", "Balance"],
    },
  ]);

  enterUser = info.username;
  enterPin = info.userpin;
  enterOp = info.options;
};

await askUserInfo();

const inputValue = async () => {
  const aValue = await inquirer.prompt({
    name: "value",
    type: "number",
    message: "amount",
  });
  return aValue.value;
};

const optionsPerform = async (name: string, pin: number, option: any) => {
  if (userName === name && userPin === pin) {
    console.log(balance);

    switch (option) {
      case "Withdraw":
        withdraw = await inputValue();
        if (balance > withdraw) {
          balance = balance - withdraw;
          console.log(balance);
        } else {
            console.log("Insufficant Balance");
        }
        break;
      case "Deposit":
        deposit = await inputValue();
        balance = deposit + balance;
        console.log(balance);
        break;
      case "Balance":
        console.log(balance);
        break;
      default:
        console.log("Wrong Input");
        break;
    }
  } else {
    console.log("Wrong Details");
  }
};

await optionsPerform(enterUser, enterPin, enterOp);
