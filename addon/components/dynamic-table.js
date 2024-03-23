import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DynamicTableComponent extends Component {
    get getHead(){
        let a= this.args.datas;
        return Object.keys(a[0]);
    }
    
    @tracked selectedId=[];

    @action
    check(id, e) {
     // console.log('checked', e.target.checked,);
      if (e.target.checked) {
        this.selectedId = [...this.selectedId, id];
      } else {
        this.selectedId = this.selectedId.filter(sid => sid != id);
      }
    }

    @action clrId(){
      this.selectedId=[];
    }

    

}
