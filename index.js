const contactServise = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServise.listContacts();
      return console.log(allContacts);
    case "get":
      const contactById = await contactServise.getContactById(id);
      return console.log(contactById);
    case "add":
      const newContact = await contactServise.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const removeContact = await contactServise.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "new contact",
//   email: "new email",
//   phone: "new phone",
// });
// invokeAction({ action: "remove", id: "XIwcCbskYzR6CO2Q1SA73" });
