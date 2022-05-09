const inquirer = require('inquirer');

const teamManPrompt = () => {
    return inquirer

    .prompt([
        {
            type:'input',
            name: 'teamManName',
            message: "What is your team manager's name?",
            validate: manName => {
                if (!manName) {
                    return false;
                }
                return true;
            }

        },
        {
            type:'input',
            name: 'teamManID',
            message: "What is your team manager's employee ID?",
            validate: teamManEmpID => {
                if (teamManEmpID) {
                    return false;
                }
                return true;
            }

        },
        {
            type:'input',
            name: 'ManEmail',
            message: "What is your manager's email?",
            validate: ManEmail => {
                if (ManEmail) {
                    return false;
                }
                return true;
            }

        },
        {
            type:'input',
            name: 'ManOfficeNum',
            message: "What is your manager's office number?",
            validate: Manofficenumber => {
                if (Manofficenumber) {
                    return false;
                }
                return true;
            }


        },
        {
            type:'list',
            name: 'addEmployee',
            message: "Would you like to add another team member?",
            choices:[
                'Add an Engineer',
                'Add an Intern',
                "I do not want to add team Members"
            ]

        }
    ])
}

const mainMenu = () => {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'addEmployeeOpts',
            message: 'Would you like to add another team member?',
            choices: [
                'Add an Engineer',
                'Add an Intern',
                "I'm done adding team members"
            ]
        } 
    ]).then(selectionInput => {
        console.log(selectionInput);
    })
};

const EngQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engName',
                message: "What is this engineer's name?",
                validate: engNameInput => {
                    if (!engNameInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engId',
                message: "What is this engineer's employee ID?",
                validate: engIdInput => {
                    if (!engIdInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "What is this engineer's email?",
                validate: engEmailInput => {
                    if (!engEmailInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engGitHub',
                message: "What is this engineer's github username?",
                validate: engGithub => {
                    if (!engGithub) {
                        return false;
                    }
                    return true;
                }
            }
        ])
};

const IntQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'intName',
                message: "What is this Intern's name?",
                validate: intNameInput => {
                    if (!intNameInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intId',
                message: "What is this Intern's employee ID?",
                validate: engIdInput => {
                    if (!engIdInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "What is this Intern's email?",
                validate: intEmailInput => {
                    if (!intEmailInput) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'intSchool',
                message: "What is the name of this Intern's school?",
                validate: intSchoolInput => {
                    if (!intSchoolInput) {
                        return false;
                    }
                    return true;
                }
            }
        ])
};


teamManPrompt();
white_check_mark
eyes
raised_hands















    
