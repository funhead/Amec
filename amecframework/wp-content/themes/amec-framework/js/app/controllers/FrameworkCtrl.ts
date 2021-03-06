

module aif {
  'use strict';

  export class FrameworkCtrl {

    public editView: AifFrameworkEditView;
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: AifFrameworkStep = null;
    public infoCell: WorkflowInfoCell = null;

    public static $inject = ["$scope",
      "frameworkRepository",
      "viewService"
    ];

    constructor(private $scope:ng.IScope,
                private frameworkRepository: FrameworkRepository, public vs:ViewService) {
      this.init();

    }

    private init():void {
       this.editView = this.frameworkRepository.getEditView();
      this.$scope.$on("framework:frameworkUpdated", (event:ng.IAngularEvent, data:any) => {
        this.editView = this.frameworkRepository.getEditView(); }
        )
      ;
    }

    public getColorClass(prefix:string, step:WorkflowStep):string{
      return prefix + "-" + step.color + " ";
    }

    public handleStepClick(stepIndex:number):void{
      let matches = this.editView.steps.filter(s => s.stepIndex === stepIndex);
      if(matches.length){
        this.switchToEditMode(matches[0])
      }

      return
    }

    public getStepTitle(stepIndex:number, defaultTitle:string):string{
      let text:string = null;
      if(stepIndex == -1){
        text = this.editView.startHereText.trim();
      }
      if(stepIndex == -2){
        text = this.editView.submitText.trim();
      }
      if(stepIndex == -3){
        text = this.editView.submitDescription.trim();
      }
      let matches = this.editView.steps.filter(s => s.stepIndex === stepIndex);
      if(matches.length){
        text =  matches[0].heading;
      }
      return text ? text : defaultTitle;
    }



    private switchToEditMode(step:AifFrameworkStep):void{
      this.editMode = true;
      this.editStep = step;
      this.vs.showEdit();
    }

    public isInSameStep(scp, arg2): boolean {
      console.log(arg2);
      return false;
    }

    public clearEditMode():void {
      this.vs.resetView();
      this.editMode = false;
      this.editStep = null;
    }

    public isInfo(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Info)
        return true;
      return false;
    }

    public isEmpty(cell: IWorkflowGridCell):boolean {
      if (cell.cellType == WorkflowCellType.Empty)
        return true;
      return false;
    }

    public isInput(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Input){
        let inputCell = cell as WorkflowInputCell;
        if(inputCell.items[0].inputStyle !== InputStyle.NumberedInputs)
          return true;
      }
      return false;
    }


    public isListInput(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Input){
        let inputCell = cell as WorkflowInputCell;
        if(inputCell.items[0].inputStyle === InputStyle.NumberedInputs)
          return true;
      }

      return false;
    }


    public showInfoCell(inputItem: IWorkflowInputItem, infoCell: WorkflowInfoCell):void{
      //e.stopPropagation();
      if(inputItem && infoCell){
        infoCell.leadText = inputItem.leadText;
        infoCell.remainText = inputItem.remainText;
        infoCell.visible = true;
      }
    }

    public hideInfoCell(){
      if(this.infoCell){
        this.infoCell.visible = false;
        this.infoCell = null;
      }
    }



    private static setRowsFromSteps(steps: IWorkflowStep[]):WorkflowRow[] {
      let rowObj = steps.reduce(function(grps, s){
        (grps[s["row"]] = grps[s["row"]] || []).push(s);
        return grps;
      }, {});

      let rowCount = Math.max.apply(Math, steps.map(function(s){return s.row;}));
      let rows = [];

      for (let i = 0; i < rowCount; i++) {
        let rowArray = rowObj[i + 1];
        let row = new WorkflowRow(rowArray);
        rows.push(row);
      }
      return rows;
    }

  }

}

