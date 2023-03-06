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
      reviews:{only: [:id, :ratings, :comment],include:{
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

  post '/reviews/' do
    review = Review.create(
     ratings: params[:ratings],
      comment: params[:comment],
     movie_id: params[:movie_id],
      viewer_id: params[:viewer_id]
    )
    review.to_json(only:[:ratings, :comment], include:{
      viewer:{only: [:id, :name]}})
  end

  patch '/review/:id' do
    review = Review.find(params[:id])
    review = Review.update(
      ratings: params[:ratings],
      comment: params[:comment],
     movie_id: params[:movie_id],
      viewer_id: params[:viewer_id]
    )
    review.to_json(only:[:ratings, :comment], include:{
      viewer:{only: [:id, :name]}})
  end

  delete '/review/:id' do
    review = Review.find(params[:id]).destroy
    review.to_json
  end

  post '/users' do
    user = Viewer.create(
      name: params[:name]
    )

    user.to_json
  end
end


