import http from "../http-common";

class EasyPCService {

  getAllCPUs() {
    return http.get("api/cpus");
  }

  getCPUById(id) {
    return http.get("api/cpu/" + id);
  }

  createCPU(data) {
    return http.post("api/cpu", data);
  }

  deleteCPU(id) {
    return http.delete("api/cpu/" + id);
  }

  getAllMotherboards() {
    return http.get("api/motherboards/");
  }

  getMotherboardById(id) {
    return http.get("api/motherboards/" + id);
  }

  createMotherboard(data) {
    return http.post("api/motherboard", data);
  }

  deleteMotherboard(id) {
    return http.delete("api/motherboard/" + id);
  }

  getAllRAMs() {
    return http.get("api/rams/");
  }

  getRAMById(id) {
    return http.get("api/ram/" + id);
  }

  createRAM(data) {
    return http.post("api/ram", data);
  }

  deleteRAM(id) {
    return http.delete("api/ram/" + id);
  }

  getAllGPUs() {
    return http.get("api/gpus/");
  }

  getGPUById(id) {
    return http.get("api/gpu/" + id);
  }

  createGPU(data) {
    return http.post("api/gpu", data);
  }

  deleteGPU(id) {
    return http.delete("api/gpu/" + id);
  }

  getAllCoolings() {
    return http.get("api/coolings/");
  }

  getCoolingById(id) {
    return http.get("api/cooling/" + id);
  }

  createCooling(data) {
    return http.post("api/cooling", data);
  }

  deleteCooling(id) {
    return http.delete("api/cooling/" + id);
  }

  getAllCases() {
    return http.get("api/cases/");
  }

  getCaseById(id) {
    return http.get("api/case/" + id);
  }

  createCase(data) {
    return http.post("api/case", data);
  }

  deleteCase(id) {
    return http.delete("api/case/" + id);
  }

  getAllPowerSupplies() {
    return http.get("api/power-supplies/");
  }

  getPowerSupplyById(id) {
    return http.get("api/power-supply/" + id);
  }

  createPowerSupply(data) {
    return http.post("api/power-supply", data);
  }

  deletePowerSupply(id) {
    return http.delete("api/power-supply/" + id);
  }

  getAllHDDs() {
    return http.get("api/hdds/");
  }

  getHDDById(id) {
    return http.get("api/hdd/" + id);
  }

  createHDD(data) {
    return http.post("api/hdd", data);
  }

  deleteHDD(id) {
    return http.delete("api/hdd/" + id);
  }

  getAllSSDs() {
    return http.get("api/ssds/");
  }

  getSSDById(id) {
    return http.get("api/hdd/" + id);
  }

  createSSD(data) {
    return http.post("api/ssd", data);
  }

  deleteSSD(id) {
    return http.delete("api/ssd/" + id);
  }

  getAllMice() {
    return http.get("api/mice/");
  }

  getMouseById(id) {
    return http.get("api/mouse/" + id);
  }

  createMouse(data) {
    return http.post("api/mouse", data);
  }

  deleteMouse(id) {
    return http.delete("api/mouse/" + id);
  }

  getAllMonitors() {
    return http.get("api/monitors/");
  }

  getMonitorById(id) {
    return http.get("api/monitor/" + id);
  }

  createMonitor(data) {
    return http.post("api/monitor", data);
  }

  deleteMonitor(id) {
    return http.delete("api/monitor/" + id);
  }

  getAllKeyboards() {
    return http.get("api/keyboards/");
  }

  getKeyboardById(id) {
    return http.get("api/keyboard/" + id);
  }

  createKeyboard(data) {
    return http.post("api/keyboard", data);
  }

  deleteKeyboard(id) {
    return http.delete("api/keyboard/" + id);
  }

  getBuildById(id) {
    return http.get("api/build/" + id);
  }

  getAll(part) {
    return http.get("api/" + part + "/");
  }

  getRecommendedPrice(answers) {
    return http.post("api/quiz-beginner-price", answers)
  }

  getRecommendedBuild(answers) {
    return http.post("api/quiz-beginner", answers)
  }


  createBuild(data) {
    return http.post("api/build-id", data);
  }

  deleteBuild(id) {
    return http.delete("api/build/" + id);
  }

  getBuildPriceById(id) {
    return http.get("api/build-price/" + id);

  }

  createCompatibility(id,data){
    return http.post("api/motherboard/compatible-cpus/"+ id,data);
  }

  getCompatibleMBs(id){
    return http.get("api/cpu/compatible/"+id);
  }

  authentication(username, password) {
    return http.post("/oauth/token", // URL
      {}, // Body
      {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          username: username,
          password: password,
          grant_type: 'password'
        },
        auth: {
          username: "EZPC",
          password: "lemon-squeezy",
        }
      }
    );
  }

  register(data) {
    return http.post("api/user", data);
  }


}

export default new EasyPCService();