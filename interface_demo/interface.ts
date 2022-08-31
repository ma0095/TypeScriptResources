interface Editor{
    edit();
    save();
    modify();
    run();

}


class Vscode implements Editor{         //vacode is the editor
    edit() {
        console.log("inside vscode edit");
        
    }
    save() {
        console.log("inside vscode save");
    }
    modify() {
        console.log("inside vscode modify");
    }
    run() {
        console.log("inside vscode run");
    }
}

var vas=new Vscode()
vas.edit()
vas.save()