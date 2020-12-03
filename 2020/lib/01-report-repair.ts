const REPORT_VALUE = 2020

export class ReportRepair {
  data: number[] = []
  values: number[]

  constructor(DATA: number[], nKeys = 2 | 3) {
    this.data = DATA;

    if (nKeys === 2) {
      this.values = [0,0]
    } else {
      this.values = [0,0,0]
    }

    this.setValues(nKeys);
  }

  setValues(nKeys: number) {
    for(let v1 of this.data) {
      for(let v2 of this.data) {
        if (v1 + v2 ===  REPORT_VALUE) {
          this.values[0] = v1;
          this.values[1] = v2;
        }

        if (nKeys === 3) {
          for(let v3 of this.data) {
            if (v1 + v2 + v3 ===  REPORT_VALUE) {
              this.values[0] = v1;
              this.values[1] = v2;
              this.values[2] = v3;
              return;
            }
          }
        }
      }
    }
  }

  getValues() {
    return this.values;
  }

  result() {
    return this.values.reduce((a, v) => {
      return a * v;
    })
  }
}