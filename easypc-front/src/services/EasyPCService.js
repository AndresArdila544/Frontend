import http from "../http-common";
import {getAuthenticationToken} from '@/dataStorage';
class EasyPCService {

  getAllCPUs() {
    return http.get("api/cpus");
  }

  getCPUById(id) {
    return http.get("api/cpu/" + id);
  }

  createCPU(data) {
    return http.post("api/create/cpu", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteCPU(id) {
    return http.delete("api/delete/cpu/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllMotherboards() {
    return http.get("api/motherboards/");
  }

  getMotherboardById(id) {
    return http.get("api/motherboards/" + id);
  }

  createMotherboard(data) {
    return http.post("api/create/motherboard", data ,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteMotherboard(id) {
    return http.delete("api/motherboard/" + id ,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllRAMs() {
    return http.get("api/rams/");
  }

  getRAMById(id) {
    return http.get("api/ram/" + id);
  }

  createRAM(data) {
    return http.post("api/create/ram", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteRAM(id) {
    return http.delete("api/delete/ram/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllGPUs() {
    return http.get("api/gpus/");
  }

  getGPUById(id) {
    return http.get("api/gpu/" + id);
  }

  createGPU(data) {
    return http.post("api/create/gpu", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteGPU(id) {
    return http.delete("api/delete/gpu/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllCoolings() {
    return http.get("api/coolings/");
  }

  getCoolingById(id) {
    return http.get("api/cooling/" + id);
  }

  createCooling(data) {
    return http.post("api/create/cooling", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteCooling(id) {
    return http.delete("api/delete/cooling/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllCases() {
    return http.get("api/cases/");
  }

  getCaseById(id) {
    return http.get("api/case/" + id);
  }

  createCase(data) {
    return http.post("api/create/case", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteCase(id) {
    return http.delete("api/delete/case/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllPowerSupplies() {
    return http.get("api/power-supplies/");
  }

  getPowerSupplyById(id) {
    return http.get("api/power-supply/" + id);
  }

  createPowerSupply(data) {
    return http.post("api/create/power-supply", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deletePowerSupply(id) {
    return http.delete("api/delete/power-supply/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllHDDs() {
    return http.get("api/hdds/");
  }

  getHDDById(id) {
    return http.get("api/hdd/" + id);
  }

  createHDD(data) {
    return http.post("api/create/hdd", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteHDD(id) {
    return http.delete("api/delete/hdd/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllSSDs() {
    return http.get("api/ssds/");
  }

  getSSDById(id) {
    return http.get("api/hdd/" + id);
  }

  createSSD(data) {
    return http.post("api/create/ssd", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteSSD(id) {
    return http.delete("api/delete/ssd/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllMice() {
    return http.get("api/mice/");
  }

  getMouseById(id) {
    return http.get("api/mouse/" + id);
  }

  createMouse(data) {
    return http.post("api/create/mouse", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteMouse(id) {
    return http.delete("api/delete/mouse/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllMonitors() {
    return http.get("api/monitors/");
  }

  getMonitorById(id) {
    return http.get("api/monitor/" + id);
  }

  createMonitor(data) {
    return http.post("api/create/monitor", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteMonitor(id) {
    return http.delete("api/delete/monitor/" + id,{ params: { access_token: getAuthenticationToken() } });
  }

  getAllKeyboards() {
    return http.get("api/keyboards/");
  }

  getKeyboardById(id) {
    return http.get("api/keyboard/" + id);
  }

  createKeyboard(data) {
    return http.post("api/create/keyboard", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteKeyboard(id) {
    return http.delete("api/delete/keyboard/" + id,{ params: { access_token: getAuthenticationToken() } });
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
    return http.post("api/build", data,{ params: { access_token: getAuthenticationToken() } });
  }

  deleteBuild(id) {
    return http.delete("api/build/" + id);
  }

  getBuildPriceById(id) {
    return http.get("api/build-price/" + id);

  }

  createCompatibility(id,data){
    return http.post("api/motherboard/compatible-cpus/"+ id,data,{ params: { access_token: getAuthenticationToken() } });
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

  getUserByToken() {
    return http.get("api/user/by-token",{ params: { access_token: getAuthenticationToken() } });
  }


}

export default new EasyPCService();