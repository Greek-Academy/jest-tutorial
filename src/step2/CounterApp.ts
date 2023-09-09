export class CounterApp {
  
  private count: number = 0;

  click() {
    this.count += 1;
    if (this.count % 10 !== 0) {
      return;
    }
    this.hiddenAction();
  }

  private hiddenAction() {
    console.info('hiddenActionが実行されました')
  }
}