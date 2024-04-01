const { ObjectId } = require("mongodb");
class MuontraService {
constructor(client) {
this.Muontra = client.db().collection("muontras");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = MuontraService;