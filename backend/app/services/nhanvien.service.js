const { ObjectId } = require("mongodb");
class NhanvienService {
constructor(client) {
this.Nhanvien = client.db().collection("nhanviens");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = NhanvienService;