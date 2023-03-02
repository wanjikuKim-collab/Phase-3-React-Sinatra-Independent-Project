require 'faker' 

puts "🌱 Seeding spices..."

# eighteen_ninety_nine = Movie.create(title: "1899", overview: "Immigrants on a steamship travelling from London to New York get caught up in a mysterious riddle after finding a second vessel adrift on the open sea.", image: "MV5BMTU1N2I5OTgtNDE2MS00ZTdmLWJlODktNDMwMGVmNzY5NmUxXkEyXkFqcGdeQXVyMDM2NDM2MQ", genre: "Mystery, Horror fiction, Supernatural fiction")
## Movies from TMDB API
Movie.create([
	{
		image: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",		
		genre: "Fantasy,Comedy horror,Supernatural",
		title: "Wednesday",
		overview: "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships."
	}, {
		image: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
		genre: "Comedy, Drama, Occult,Crime",
		title: "Lucifer",
		overview: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape."
	}, {
		image: "https://upload.wikimedia.org/wikipedia/en/2/24/All_of_Us_Are_Dead.jpeg",
		genre: "K-drama, Apocalypse,Horror",
		title: "All of Us Are Dead",
		overview: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected."
	}, {
		image: "https://m.media-amazon.com/images/M/MV5BZmUxYTllMzEtNmNmMi00OWNkLTg0ZmItZDdkYTJkOTAxZmJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
		genre: "Psychological thriller,Crime",
		title: "You",
		overview: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by."
	}, {
		image: "https://m.media-amazon.com/images/M/MV5BOTcyOGZiMzctNTQyOS00OTYzLTk0M2EtMTI5MTU0NmU5ZGU2XkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg",
		genre: "Action,Fantasy,Anime",
		title: "Record of Ragnarok",
		overview: "Before eradicating humankind from the world, the gods give them one last chance to prove themselves worthy of survival. Let the Ragnarok battles begin."
	}, {
		image: "https://occ-0-1412-1413.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABbgIYxG4q08bJqESBrR_AJ8Sh0aSRR-f0PRkiqj6aL3uV6E8TFe3lduXVQVWya5-fe6TWvDqW5U5whLVl7jO9ezcb6dbAY7pNtc54ixDq1P46x2w4W92h-eB4-5kktuU5gIOiw.jpg",
		genre: "Thriller,Mystery",
		title: "Triptych",
		overview: "After learning she was separated at birth from her two identical sisters, Rebecca embarks on a perilous journey to uncover the truth about her origins."
	}, {
		image: "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABf18PTUrzN99K56CaExtgkL1c0_r-H4fDXKyWpYoCvuiM-HPDHtZK2GSjtrfOCxQ16Ko3OcEKX-vKL0VYKiTVnFpklUES8fM1h9_2GFqwS73g0uGu5GXtRs5tUTOz-wqNwjvjQ.jpg?r=ed8",
		genre: "Crime,Drama,Mystery,Thriller",
		title: "The Snow Girl",
		overview: "When a little girl goes missing during a parade in Málaga, a young newspaper journalist becomes fiercely determined to help Amaya's parents find her."
	}, {
		image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
		genre: "Horror,Supernatural,Thriller",
		title: "Stranger Things",
		overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
	}, {
		image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUFCz33sbPJ7CErTII0hOiz68cHthNOxj9i66qKlyCk5_jBEtmojfMArawS09sT1a5c2iHPlV-mttTkk7zb1AFt4tDWlzJmjox-WbGdio6UF6PeTbAmO5sLtInXU-NspAns1AI0AXx2AChYsETCniMaA.jpg?r=41b",
		genre: "Drama,Adventure,Action",
		title: "The Witcher: Blood Origin",
		overview: "More than a thousand years before the world of The Witcher, seven outcasts in the elven world unite in a blood quest against an unstoppable power."
	}, {
		image: "https://images.ctfassets.net/4cd45et68cgf/4g2KWWsb3asC3VQVYS2eSs/3d1520b9ef5dac16f7ee6b06da3b3e73/DE_1899S1_Main_Vertical_27x40_RGB_PRE.jpg?w=2560",
		genre: "Mystery,Horror,Supernatural",
		title: "1899",
		overview: "Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea."
	},{
		image: "https://i.pinimg.com/564x/fd/fc/d4/fdfcd464e64256a07379495f917648a1.jpg",
		genre: "Thriller,Drama",
		title: "Elite",
		overview: "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy."
	}
])

5.times do
	Viewer.create(
		name: Faker::Name.name,
		email: Faker::Internet.email
	)
end


# Review.create(ratings: 4.7, comment: "I binge watched the entire season in one go and it had me at the edge of my seat the entire time. Right when you think that things are starting to come together you're quickly given a curveball that leaves you totally shocked. ", viewer_id: 1, movie_id: 1)
# Review.create(ratings: 5, comment: "(NO spoilers) This is literally THE BEST TV SHOW I HAVE SEEN IN YEARS!!!! ", viewer_id: 4, movie_id: 1)

100.times do
    Review.create(
        ratings: Faker::Number.between(from: 0, to: 5),
        comment: Faker::Lorem.sentence,
        movie_id: rand(Movie.first.id..Movie.last.id),
        viewer_id: rand(Viewer.first.id..Viewer.last.id)
    )
end


# Viewer.create(name: "Patricia Sibaja")
# Viewer.create(name: "James Murithi")
# Viewer.create(name: "Alex Tweng")
# Viewer.create(name: "Maxwell Wachira")
# Viewer.create(name: "Kim Sung Wu")





puts "✅ Done seeding!"
