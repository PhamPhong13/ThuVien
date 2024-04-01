const { ObjectId } = require("mongodb");
class DongiaService {
constructor(client) {
this.Dongia = client.db().collection("dongias");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = DongiaService;