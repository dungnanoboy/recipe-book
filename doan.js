use doan;

db.createCollection("users");

db.users.insertOne(
{
  id: 1,
  username: "foodlover123",
  email: "foodlover@example.com",
  password: "password_here",
  avatarUrl: "/img/user-img/Lukey.png",
  bio: "Tôi yêu ẩm thực Việt!",
  joinedAt: new Date()
});

db.users.insertMany([
  {
    id: 2,
    username: "chefnguyen",
    email: "chefnguyen@example.com",
    password: "hashed_password",
    avatarUrl: "/img/user-img/Lukey.png",
    bio: "Đam mê món Việt truyền thống",
    joinedAt: new Date()
  },
  {
    id: 3,
    username: "veggielife",
    email: "veggielife@example.com",
    password: "hashed_password",
    avatarUrl: "/img/user-img/Lukey.png",
    bio: "Ăn chay healthy, sống xanh mỗi ngày",
    joinedAt: new Date()
  },
  {
    id: 4,
    username: "minhkitchen",
    email: "minh@example.com",
    password: "hashed_password",
    avatarUrl: "/img/user-img/Lukey.png",
    bio: "Nấu ăn là đam mê",
    joinedAt: new Date()
  }
]);

db.createCollection("categories")

db.categories.insertMany([
  { id: 1, name: "Món nước", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 2, name: "Món chay", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 3, name: "Món chiên", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 4, name: "Ăn sáng", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 5, name: "Ăn vặt", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 6, name: "Khai vị", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 7, name: "Nhanh dễ", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 8, name: "Thức uống", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 9, name: "Nước chấm", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 10, name: "Snacks", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 11, name: "Món chính", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 12, name: "Làm bánh", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 13, name: "Healthy", icon: "/img/icons/categories-icon/breakfast.png" },
  { id: 14, name: "Salad", icon: "/img/icons/categories-icon/breakfast.png" }
])


db.createCollection("ingredients")
db.ingredients.insertMany([
  { _id: 1, name: "Xương bò", unit: "g", category: "Thịt" },
  { _id: 2, name: "Bánh phở", unit: "g", category: "Tinh bột" },
  { _id: 3, name: "Gừng", unit: "củ", category: "Gia vị" },
  { _id: 4, name: "Đậu hũ", unit: "g", category: "Đạm thực vật" },
  { _id: 5, name: "Nấm rơm", unit: "g", category: "Nấm" }
]);

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
]);

db.ingredients.insertMany([
  { _id: 17, name: "Trứng gà", unit: "quả", category: "Đạm động vật" },
  { _id: 18, name: "Sữa đặc", unit: "muỗng", category: "Sữa" },
  { _id: 19, name: "Bơ", unit: "g", category: "Bơ sữa" },
  { _id: 20, name: "Bột mì", unit: "g", category: "Tinh bột" },
  { _id: 21, name: "Rau thơm", unit: "g", category: "Rau" },
  { _id: 22, name: "Bún tươi", unit: "g", category: "Tinh bột" },
  { _id: 23, name: "Tôm", unit: "g", category: "Hải sản" },
  { _id: 24, name: "Xoài", unit: "quả", category: "Trái cây" },
  { _id: 25, name: "Đá bào", unit: "g", category: "Khác" }
]);


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
  imageUrls: ["/img/bg-img/r5.jpg"],
  category_Id: 1,
  tags: ["phở", "món nước"],
  views: 0,
  userId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
});

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
  imageUrls: ["/img/bg-img/r5.jpg"],
  category_Id: 2,
  tags: ["món chay", "đậu hũ", "kho", "nấm"],
  views: 0,
  userId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
});

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
  imageUrls: ["/img/bg-img/r5.jpg"],
  category_Id: 3,
  tags: ["chả giò", "chiên", "món chiên", "truyền thống"],
  views: 0,
  userId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
});

db.recipes.insertMany([
  {
    title: "Bún riêu chay",
    ingredients: [
      { ingredient_id: 4, amount: 150 },
      { ingredient_id: 5, amount: 50 },
      { ingredient_id: 6, amount: 2 },
      { ingredient_id: 7, amount: 3 },
      { ingredient_id: 8, amount: 3 }
    ],
    instructions: [
      "Đun nước với gia vị cho thơm.",
      "Cho đậu và nấm vào nấu cùng.",
      "Thêm bún vào tô, chan nước dùng lên và thưởng thức."
    ],
    cookingTimeMinutes: 30,
    servings: 2,
    imageUrls: ["/img/bg-img/r5.jpg"],
    category_Id: 2,
    tags: ["bún", "chay", "đậu", "nấm"],
    views: 0,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Cơm tấm sườn bì chả",
    ingredients: [
      { ingredient_id: 11, amount: 200 },
      { ingredient_id: 8, amount: 5 },
      { ingredient_id: 9, amount: 2 },
      { ingredient_id: 7, amount: 3 }
    ],
    instructions: [
      "Ướp sườn và nướng.",
      "Chiên chả trứng, nấu cơm.",
      "Dọn ra dĩa cùng đồ chua và nước mắm."
    ],
    cookingTimeMinutes: 60,
    servings: 2,
    imageUrls: ["/img/bg-img/r1.jpg"],
    category_Id: 11,
    tags: ["cơm tấm", "sườn", "chả", "truyền thống"],
    views: 0,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Gỏi cuốn tôm thịt",
    ingredients: [
      { ingredient_id: 15, amount: 10 },
      { ingredient_id: 11, amount: 100 },
      { ingredient_id: 16, amount: 2 }
    ],
    instructions: [
      "Luộc tôm thịt, thái lát mỏng.",
      "Cuốn với rau sống và bún.",
      "Chấm nước mắm chua ngọt."
    ],
    cookingTimeMinutes: 25,
    servings: 4,
    imageUrls: ["/img/bg-img/r1.jpg"],
    category_Id: 5,
    tags: ["gỏi cuốn", "ăn vặt", "cuốn"],
    views: 0,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

db.recipes.insertMany([
  {
    title: "Bánh mì ốp la",
    ingredients: [
      { ingredient_id: 17, amount: 2 },
      { ingredient_id: 19, amount: 10 },
      { ingredient_id: 8, amount: 5 }
    ],
    instructions: [
      "Chiên trứng với bơ.",
      "Dọn cùng bánh mì và thêm gia vị nếu cần."
    ],
    cookingTimeMinutes: 10,
    servings: 1,
    imageUrls: ["/img/bg-img/r1.jpg"],
    category_Id: 4,
    tags: ["ăn sáng", "bánh mì", "ốp la"],
    views: 0,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Xôi xoài",
    ingredients: [
      { ingredient_id: 24, amount: 1 },
      { ingredient_id: 18, amount: 2 },
      { ingredient_id: 2, amount: 200 }
    ],
    instructions: [
      "Nấu xôi từ gạo nếp.",
      "Xoài gọt vỏ cắt lát.",
      "Ăn kèm xôi và sữa đặc."
    ],
    cookingTimeMinutes: 30,
    servings: 2,
    imageUrls: ["/img/bg-img/r2.jpg"],
    category_Id: 10,
    tags: ["tráng miệng", "xôi", "xoài"],
    views: 0,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Bánh pancake bơ sữa",
    ingredients: [
      { ingredient_id: 20, amount: 100 },
      { ingredient_id: 17, amount: 1 },
      { ingredient_id: 18, amount: 2 },
      { ingredient_id: 19, amount: 10 }
    ],
    instructions: [
      "Trộn bột với trứng, sữa đặc, bơ.",
      "Đổ bột lên chảo và nướng 2 mặt vàng đều."
    ],
    cookingTimeMinutes: 20,
    servings: 2,
    imageUrls: ["/img/bg-img/r2.jpg"],
    category_Id: 12,
    tags: ["bánh", "pancake", "ăn sáng"],
    views: 0,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Súp rau củ chay",
    ingredients: [
      { ingredient_id: 13, amount: 1 },
      { ingredient_id: 5, amount: 50 },
      { ingredient_id: 21, amount: 20 }
    ],
    instructions: [
      "Hầm rau củ với gia vị.",
      "Nêm nếm và thưởng thức nóng."
    ],
    cookingTimeMinutes: 30,
    servings: 2,
    imageUrls: ["/img/bg-img/r2.jpg"],
    category_Id: 2,
    tags: ["chay", "súp", "healthy"],
    views: 0,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Gỏi xoài tôm khô",
    ingredients: [
      { ingredient_id: 24, amount: 1 },
      { ingredient_id: 23, amount: 100 },
      { ingredient_id: 9, amount: 2 },
      { ingredient_id: 16, amount: 1 }
    ],
    instructions: [
      "Xoài bào sợi, trộn với tôm, nêm nước mắm chua ngọt.",
      "Ăn kèm bánh phồng hoặc cơm."
    ],
    cookingTimeMinutes: 15,
    servings: 2,
    imageUrls: ["/img/bg-img/r3.jpg"],
    category_Id: 6,
    tags: ["gỏi", "xoài", "ăn vặt"],
    views: 0,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Chè bưởi",
    ingredients: [
      { ingredient_id: 8, amount: 50 },
      { ingredient_id: 25, amount: 100 },
      { ingredient_id: 18, amount: 2 }
    ],
    instructions: [
      "Luộc vỏ bưởi, trộn với đường và sữa.",
      "Thêm đá bào và thưởng thức mát lạnh."
    ],
    cookingTimeMinutes: 30,
    servings: 3,
    imageUrls: ["/img/bg-img/r3.jpg"],
    category_Id: 10,
    tags: ["chè", "tráng miệng", "ăn vặt"],
    views: 0,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Miến xào tôm",
    ingredients: [
      { ingredient_id: 12, amount: 100 },
      { ingredient_id: 23, amount: 150 },
      { ingredient_id: 13, amount: 1 },
      { ingredient_id: 10, amount: 1 }
    ],
    instructions: [
      "Ngâm miến, xào với tôm, rau củ và nêm gia vị.",
      "Dọn ra đĩa và ăn nóng."
    ],
    cookingTimeMinutes: 25,
    servings: 2,
    imageUrls: ["/img/bg-img/r3.jpg"],
    category_Id: 3,
    tags: ["miến", "xào", "tôm"],
    views: 0,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Salad trứng bơ",
    ingredients: [
      { ingredient_id: 17, amount: 2 },
      { ingredient_id: 19, amount: 20 },
      { ingredient_id: 21, amount: 30 }
    ],
    instructions: [
      "Luộc trứng, trộn với bơ và rau thơm.",
      "Thêm gia vị và dầu oliu nếu có."
    ],
    cookingTimeMinutes: 10,
    servings: 2,
    imageUrls: ["/img/bg-img/r4.jpg"],
    category_Id: 14,
    tags: ["salad", "healthy", "trứng", "bơ"],
    views: 0,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Bún thịt nướng",
    ingredients: [
      { ingredient_id: 11, amount: 200 },
      { ingredient_id: 22, amount: 200 },
      { ingredient_id: 21, amount: 20 },
      { ingredient_id: 16, amount: 1 }
    ],
    instructions: [
      "Ướp và nướng thịt.",
      "Bún trụng sơ, xếp ra tô kèm rau và thịt.",
      "Chan nước mắm pha."
    ],
    cookingTimeMinutes: 40,
    servings: 2,
    imageUrls: ["/img/bg-img/r4.jpg"],
    category_Id: 11,
    tags: ["bún", "nướng", "món chính"],
    views: 0,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Sinh tố xoài",
    ingredients: [
      { ingredient_id: 24, amount: 1 },
      { ingredient_id: 18, amount: 2 },
      { ingredient_id: 25, amount: 100 }
    ],
    instructions: [
      "Cho tất cả nguyên liệu vào máy xay sinh tố.",
      "Xay nhuyễn và dùng ngay."
    ],
    cookingTimeMinutes: 5,
    servings: 1,
    imageUrls: ["/img/bg-img/r4.jpg"],
    category_Id: 8,
    tags: ["thức uống", "xoài", "sinh tố"],
    views: 0,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);


db.users.find({},{ "_id": 0 });
db.categories.find({},{ "_id": 0 });
db.ingredients.find({},{ "_id": 0 });
db.recipes.find({},{ "_id": 0 });



db.recipes.find({},{_id:0}).sort({createdAt:-1}) 