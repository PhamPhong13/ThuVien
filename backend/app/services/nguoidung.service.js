const { ObjectId } = require("mongodb");
class NguoidungService {
constructor(client) {
this.Nguoidung = client.db().collection("nguoidungs");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = NguoidungService;