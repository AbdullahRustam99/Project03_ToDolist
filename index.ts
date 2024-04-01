#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true;

let title = await inquirer.prompt([{
	name: "title",
	type: "input",
	message: chalk.bold.hex("#FAFFFF")("What is your List Title :")
}]);

while (condition) {
	let addTask = await inquirer.prompt([{
		name: "item",
		type: "input",
		message: chalk.bold.hex("#FAFFFF")("What you want to ADD : ")
	},
	{
		name: "more",
		type: "confirm",
		message: chalk.bold.hex("#00FFAE")("Are you want to add more item"),
		default: "false"
	}
	])
	todos.push(addTask.item);
	condition = addTask.more
};
console.log(chalk.bold.hex("#001CCF")(`${(title.title).toUpperCase()}`) + chalk.bold.hex("#F7FFFB")(" : "));

for (let i = 0; i < todos.length; i++) {
	console.log(chalk.bold.hex("#FAFFFF")(`${i + 1}. ${todos[i]} `))
};

let conditions = true;

while (conditions) {
	let confirm = await inquirer.prompt([
		{
			type: "confirm",
			name: "update",
			message: chalk.bold.hex("#00FFAE")("Do you Want to update OR change your list item"),
			default: "fasle"

		}]);
	conditions = confirm.update
	if (conditions == true) {
		let taskCheck = await inquirer.prompt([
			{
				type: "list",
				name: "check",
				message: chalk.bold.hex("#9E00FF")("Select Option"),
				choices: ["CheckList", "AddMore", "DeleteItem"],
			}])
		switch (taskCheck.check) {

			case "CheckList":
				for (let i = 0; i < todos.length; i++) {
					console.log(chalk.bold.hex("#FAFFFF")(`${i + 1}. ${todos[i]} `))
				};
				break;
			case "AddMore":
				let addlist = await inquirer.prompt([{
					type: "input",
					name: "addmore",
					message: chalk.bold.hex("#FAFFFF")("Write your item")
				}])
				todos.push(addlist.addmore)
				for (let i = 0; i < todos.length; i++) {
					console.log(chalk.bold.hex("#FAFFFF")(`${i + 1}. ${todos[i]} `))
				};
				break;
			case "DeleteItem":
				let deletList = await inquirer.prompt([{
					type: "list",
					name: "delete",
					message: chalk.bold.hex("#FF0000")("What you want to delete item"),
					choices: [...todos]
				}])
				let a = todos.splice(todos.indexOf(deletList.delete), 1)
				for (let i = 0; i < todos.length; i++) {
					console.log(chalk.bold.hex("#FAFFFF")(`${i + 1}. ${todos[i]} `))
				};
				break;

		}
	}
}





