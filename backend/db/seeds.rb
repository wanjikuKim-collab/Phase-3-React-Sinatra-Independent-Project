puts "🌱 Seeding spices..."

# Seed your database here
Movie.create(title: "Alice in Boderland", overview: "Alice in Borderland stars Kento Yamazaki as young unemployed gamer Ryohei Arisu, whose life changes drastically when he is mysteriously transported to a parallel universe in which he is forced to play a series of twisted games in order to remain alive. There's no telling who, exactly, is behind these games — Aliens", image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQT-N5q5ZH-s7BmNbaq8drcFA6FvuQExH5jjla9x0gVrUWXgKV2SgYMNodXqu5OAhnRWGJjJWSrCY1qKk5UJVMFZwUj5gGKGe-8kVYaSYsri5GxZuCH8Epo_Nv0R7Qj89UJXxEOM6y902Fz0PSqBqNl_zP8I.jpg?r=b3a", genre: "Thriller")
Review.create(ratings: 4.7, comment: "The whole show keeps me stuck in my seat. I really liked the games and the interaction between the players.", viewer_id: 1, movie_id: 1)
Viewer.create(name: "Patricia Sibaja")

puts "✅ Done seeding!"
