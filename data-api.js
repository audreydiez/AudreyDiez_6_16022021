export class DataApi {
  constructor() {

    this.url =  "AudreyDiez_6_16022021/data.json";
  }

  async getData() {
    try {
      let response = await fetch(this.url);

      // Error throwing
      if (!response.ok) {
        const message = `An error has occured on fetching JSON: ${response.status}`;
        throw new Error(message);
      }

      return await response.json();
    } catch (error) {
      console.log("An error has occured on fetching JSON: " + error);
    }
  }
}
