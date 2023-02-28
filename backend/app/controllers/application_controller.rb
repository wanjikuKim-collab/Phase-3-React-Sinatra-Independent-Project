class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Displays all movies in the database
  get '/movies' do
    movies = Movie.all
    movies.to_json(only:[:id, :title, :overview, :image, :genre],include:{
      reviews:{only: [:ratings, :comment],include:{
      viewer: {only:[:name]}
      }}})
  end

  get '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.to_json
  end

  post '/movies' do
    new_movie = Movie.create(
      title: params[:title],
      image: params[:image],
      genre: params[:genre],
      overview: params[:overview]
    )

    new_movie.to_json
  end


  delete '/movies/:id' do
    movie=Movie.find(params[:id]).destroy
    movie.to_json
  end

  ######Reviews####
  get '/reviews' do
    Review.all.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: :name}, :movie => {:only => :title}
      })
  end

  get '/reviews/:id' do
    review = Review.find(params[:id])
    review.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: :name}, :movie => {:only => :title}
    })
  end

  post '/reviews' do
    movie = Movie.find_by(id: params[movie_id])
    review = movie.reviews.build(
      ratings: params[:ratings],
      comment: params[:comment],
      viewer_id: params[:viewer_id],
      movie_id: params[:movie_id]
    )

    review.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: :name}, :movie => {:only => :title}
      })
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      ratings: params[:ratings],
      comment: params[:comment]
    )
    review.to_json(only:[:id, :ratings, :comment], include:{:movie => {:only => :title}})
  end

  delete '/review/:id' do
    review = review = Review.find(params[:id])
    review.destroy
    review.to_json
  end
end
