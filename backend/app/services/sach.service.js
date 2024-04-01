const { ObjectId } = require("mongodb");
class SachService {
constructor(client) {
this.Sach = client.db().collection("sachs");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = SachService;