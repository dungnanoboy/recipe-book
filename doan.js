use doan
db.createCollection("users")
db.users.insertOne(
{
  id: 1,
  username: "foodlover123",
  email: "foodlover@example.com",
  password: "password_here",
  avatarUrl: "https://example.com/avatar.jpg",
  bio: "Tôi yêu ẩm thực Việt!",
  joinedAt: new Date()
})

db.createCollection("categories")
db.categories.insertMany([
{id:1, name: "Món nước", description: "Các món ăn có nước dùng như phở, bún, miến..."},
{id:2, name: "Món chay", description: "Các món chay thanh đạm, không dùng thịt cá"},
{id:3, name: "Món chiên", description: "Các món chiên giòn hấp dẫn"}
])

db.createCollection("ingredients")
db.ingredients.insertMany([
  { _id: 1, name: "Xương bò", unit: "g", category: "Thịt" },
  { _id: 2, name: "Bánh phở", unit: "g", category: "Tinh bột" },
  { _id: 3, name: "Gừng", unit: "củ", category: "Gia vị" },
  { _id: 4, name: "Đậu hũ", unit: "g", category: "Đạm thực vật" },
  { _id: 5, name: "Nấm rơm", unit: "g", category: "Nấm" }
])

db.ingredients.insertMany([
  { _id: 6, name: "Nước tương", unit: "muỗng canh", category: "Gia vị" },
  { _id: 7, name: "Muối", unit: "g", category: "Gia vị" },
  { _id: 8, name: "Đường", unit: "g", category: "Gia vị" },
  { _id: 9, name: "Tiêu", unit: "g", category: "Gia vị" },
  { _id: 10, name: "Hành tím", unit: "củ", category: "Gia vị" },
  { _id: 11, name: "Thịt heo xay", unit: "g", category: "Thịt" },
  { _id: 12, name: "Miến", unit: "g", category: "Tinh bột" },
  { _id: 13, name: "Cà rốt", unit: "củ", category: "Rau củ" },
  { _id: 14, name: "Nấm mèo", unit: "g", category: "Nấm" },
  { _id: 15, name: "Bánh tráng cuốn", unit: "cái", category: "Khác" },
  { _id: 16, name: "Nước mắm", unit: "muỗng", category: "Gia vị" }
])

db.createCollection("recipes")
db.recipes.insertOne({
  title: "Phở bò Hà Nội",
  ingredients: [
    { ingredient_id: 1, amount: 500 },
    { ingredient_id: 2, amount: 200 },
    { ingredient_id: 3, amount: 1 }
  ],
  instructions: [
    "Rửa sạch xương bò...",
    "Hầm xương 3 tiếng...",
    "Chần bánh phở..."
  ],
  cookingTimeMinutes: 180,
  servings: 4,
  category_Id: 1,
  tags: ["phở", "món nước"],
  views: 0,
  createdAt: new Date(),
  updatedAt: new Date()
})

db.recipes.insertOne({
  title: "Đậu hũ kho nấm",
  ingredients: [
    { ingredient_id: 4, amount: 200 },  
    { ingredient_id: 5, amount: 100 }, 
    { ingredient_id: 6, amount: 2 },   
    { ingredient_id: 7, amount: 5 },   
    { ingredient_id: 8, amount: 5 },    
    { ingredient_id: 9, amount: 2 },    
    { ingredient_id: 10, amount: 1 }
  ],
  instructions: [
    "Cắt đậu hũ thành miếng vừa ăn, chiên vàng.",
    "Xào nấm với hành tím cho thơm.",
    "Cho đậu hũ vào kho chung với nấm, thêm nước tương và gia vị, đun nhỏ lửa trong 10 phút."
  ],
  cookingTimeMinutes: 30,
  servings: 2,
  imageUrls: ["https://example.com/images/dauhu-kho-nam.jpg"],
  category_Id: 2,
  tags: ["món chay", "đậu hũ", "kho", "nấm"],
  views: 0,
  createdAt: new Date(),
  updatedAt: new Date()
})

db.recipes.insertOne({
  title: "Chả giò chiên giòn",
  ingredients: [
    { ingredient_id: 11, amount: 200 }, 
    { ingredient_id: 12, amount: 100 },
    { ingredient_id: 13, amount: 1 },  
    { ingredient_id: 14, amount: 50 }, 
    { ingredient_id: 15, amount: 10 }, 
    { ingredient_id: 16, amount: 1 },  
    { ingredient_id: 9, amount: 2 },   
    { ingredient_id: 8, amount: 5 }    
  ],
  instructions: [
    "Ngâm miến và nấm mèo cho mềm, cắt nhỏ.",
    "Trộn thịt, miến, cà rốt bào, nấm và gia vị.",
    "Cuốn hỗn hợp vào bánh tráng, cuốn chặt tay.",
    "Chiên chả giò trong dầu nóng đến khi vàng giòn."
  ],
  cookingTimeMinutes: 45,
  servings: 4,
  imageUrls: ["https://example.com/images/chagio.jpg"],
  category_Id: 3,
  tags: ["chả giò", "chiên", "món chiên", "truyền thống"],
  views: 0,
  createdAt: new Date(),
  updatedAt: new Date()
})




db.users.find({},{ "_id": 0 })
db.categories.find({},{ "_id": 0 })
db.ingredients.find({},{ "_id": 0 })
db.recipes.find({},{ "_id": 0 })



db.recipes.find({},{_id:0}).sort({createdAt:-1}) 