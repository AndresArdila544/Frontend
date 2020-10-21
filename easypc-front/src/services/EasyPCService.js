import http from "../http-common";

class EasyPCService {
    getAllCPUs() {
      return http.get("/cpus");
    }
  
    getCPUById(id) {
      return http.get("/cpu/" + id);
    }
  
    createCPU(data) {
      return http.post("/cpu", data);
    }
  
    deleteCPU(id) {
      return http.delete("/cpu/" + id);
    }

    getAllMotherboards() {
      return http.get("/motherboards/");
    }
    
    getMotherboardById(id) {
      return http.get("/motherboards/" + id);
    }

    createMotherboard(data) {
      return http.post("/motherboard", data);
    }
  
    deleteMotherboard(id) {
      return http.delete("/motherboard/" + id);
    }

    getAllRAMs() {
      return http.get("/rams/");
    }
    
    getRAMById(id) {
      return http.get("/ram/" + id);
    }

    createRAM(data) {
      return http.post("/ram", data);
    }
  
    deleteRAM(id) {
      return http.delete("/ram/" + id);
    }

    getAllGPUs() {
      return http.get("/gpus/");
    }
    
    getGPUById(id) {
      return http.get("/gpu/" + id);
    }

    createGPU(data) {
      return http.post("/gpu", data);
    }
  
    deleteGPU(id) {
      return http.delete("/gpu/" + id);
    }

    getAllCoolings() {
      return http.get("/coolings/");
    }
    
    getCoolingById(id) {
      return http.get("/cooling/" + id);
    }

    createCooling(data) {
      return http.post("/cooling", data);
    }
  
    deleteCooling(id) {
      return http.delete("/cooling/" + id);
    }

    getAllCases() {
      return http.get("/cases/");
    }
    
    getCaseById(id) {
      return http.get("/case/" + id);
    }

    createCase(data) {
      return http.post("/case", data);
    }
  
    deleteCase(id) {
      return http.delete("/case/" + id);
    }

    getAllPowerSupplies() {
      return http.get("/power-supplies/");
    }
    
    getPowerSupplyById(id) {
      return http.get("/power-supply/" + id);
    }

    createPowerSupply(data) {
      return http.post("/power-supply", data);
    }
  
    deletePowerSupply(id) {
      return http.delete("/power-supply/" + id);
    }

    getAllHDDs() {
      return http.get("/hdds/");
    }
    
    getHDDById(id) {
      return http.get("/hdd/" + id);
    }

    createHDD(data) {
      return http.post("/hdd", data);
    }
  
    deleteHDD(id) {
      return http.delete("/hdd/" + id);
    }

    getAllSSDs() {
      return http.get("/ssds/");
    }
    
    getSSDById(id) {
      return http.get("/hdd/" + id);
    }

    createSSD(data) {
      return http.post("/ssd", data);
    }
  
    deleteSSD(id) {
      return http.delete("/ssd/" + id);
    }

    getAllMice() {
      return http.get("/mice/");
    }
    
    getMouseById(id) {
      return http.get("/mouse/" + id);
    }

    createMouse(data) {
      return http.post("/mouse", data);
    }
  
    deleteMouse(id) {
      return http.delete("/mouse/" + id);
    }

    getAllMonitors() {
      return http.get("/monitors/");
    }
    
    getMonitorById(id) {
      return http.get("/monitor/" + id);
    }

    createMonitor(data) {
      return http.post("/monitor", data);
    }
  
    deleteMonitor(id) {
      return http.delete("/monitor/" + id);
    }

    getAllKeyboards() {
      return http.get("/keyboards/");
    }
    
    getKeyboardById(id) {
      return http.get("/keyboard/" + id);
    }

    createKeyboard(data) {
      return http.post("/keyboard", data);
    }
  
    deleteKeyboard(id) {
      return http.delete("/keyboard/" + id);
    }

    getBuildById(id) {
      return http.get("/build/" + id);
    }

    getAll(part){
      return http.get("/"+part+"/");
    }

    getRecommendedPrice(answers){
      return http.post("/quiz-beginner-price",answers)
      }
    

}
  
  export default new EasyPCService();