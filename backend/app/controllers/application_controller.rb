class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
  
  # Displays all movies in the database
  get '/mylist' do
    movies = Movie.all
    movies.to_json(only:[:id, :title, :overview, :image, :genre],include:{
      reviews:{only: [:ratings, :comment],include:{
      viewer: {only:[:name]}
      }}})
  end
  # Display one movie
  get '/mylist/:id' do
    movie = Movie.find(params[:id])
    movie.to_json(only:[:id, :title, :overview, :image, :genre],include:{
      reviews:{only: [:ratings, :comment],include:{
      viewer: {only:[:name]}
      }}})
  end
  # Add movie using a form
  post '/mylist/' do
    new_movie = Movie.create(
      title: params[:title],
      image: params[:image],
      genre: params[:genre],
      overview: params[:overview]
    )

    new_movie.to_json
  end

  #  Delete Movie from myList
  delete '/mylist/:id' do
    movie=Movie.find(params[:id]).destroy
    movie.to_json
  end
  
  
  ######Reviews####
  get '/reviews' do
    Review.all.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: :name}, :movie => {:only => :title}
      })
  end

  delete '/review/:id' do
    review = Review.find(params[:id]).destroy
    review.to_json
  end



end


#   get '/reviews/:id' do
#     review = Review.find(params[:id])
#     review.to_json(only:[:id, :ratings, :comment], include:{
#       viewer: {only: :name}, :movie => {:only => :title}
#     })
#   end

#     ## create a review
#     post '/review/' do
#       #get movie id from postman or the front end
#       movie = Movie.find_by(id: params[:movie_id])
#       # get user email from postman to get user id
#       existing_review = User.find_by(email:params[:email])
#       #create review instance
#       if existing_user
#         review = Review.create(
#           comment: params[:comment],
#           ratings: params[:ratings],
#           viewer_id: existing_user.id,
#           movie_id: movie.id
#         )
#         review.save
#         {
#           "message": "Review for #{movie.title} by #{existing_user.name}",
#           "status": "201_Created"
#         }.to_json
#       else
#         {
#           "error": "User not found",
#           "status": "404_Created"
#         }.to_json
#     end

#   delete '/reviews/:id' do
#     review = Review.find(params[:id])
#     if review.destroy
#       {
#         "Message": "Review with id:#{id} deleted successfully",
#         "Status": "HTTP_200_OK"
#       }.to_json
#     else
#       {
#         "Message": "Failed to delete review",
#         "Status": "HTTP_400_BAD_REQUEST"
#       }.to_json
#   end
# end
