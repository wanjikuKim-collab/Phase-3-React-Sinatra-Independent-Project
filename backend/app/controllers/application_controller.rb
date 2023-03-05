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

  get '/mylist/:id' do
    movie = Movie.find(params[:id])
    movie.to_json(only:[:id, :title, :overview, :image, :genre],include:{
      reviews:{only: [:ratings, :comment],include:{
      viewer: {only:[:name]}
      }}})
  end

  post '/mylist/' do
    new_movie = Movie.create(
      title: params[:title],
      image: params[:image],
      genre: params[:genre],
      overview: params[:overview]
    )

    new_movie.to_json
  end


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

  get '/reviews/:id' do
    review = Review.find(params[:id])
    review.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: :name}, :movie => {:only => :title}
    })
  end

  post '/reviews/' do
    movie = Movie.find_by(id: params[movie_id])
    review = movie.reviews.build(
      ratings: params[:ratings],
      comment: params[:comment],
      viewer_id: params[:viewer_id],
      movie_id: params[:movie_id]
    )

    review.to_json(only:[:id, :ratings, :comment], include:{
      viewer: {only: [:name, :email]}, :movie => {:only => :title}
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


  #save User
  post '/viewer/' do
  existing_user = User.find_by(email: params[:email])
  ##check if user exists
  if existing_user?
    return {"error": "User Already Existing"}.to_json
  end
  ##create user instance
    user = Viewer.create(
      name: params[:name]
    )

    user.save
    {
      "message": "User Created Successfully",
      "status": "HTTP_201_created"
    }.to_json
  end


  ## create a review
  post '/review/' do
    #get movie id from postman or the front end
    movie = Movie.find_by(id: params[:movie_id])
    # get user email from postman to get user id
    existing_user = User.find_by(email:params[:email])
    #create review instance
    if existing_user
      review = Review.create(
        comment: params[:comment],
        ratings: params[:ratings],
        viewer_id: existing_user.id,
        movie_id: movie.id
      )
      review.save
      {
        "message": "Review for #{movie.title} by #{existing_user.name}",
        "status": "201_Created"
      }.to_json
    else
      {
        "error": "User not found",
        "status": "404_Created"
      }.to_json
  end
end


  ## to get all the people who've watched the movie
  get '/mylist/:id/users' do
    ## get movie
    movie = Movie.find(params[:id])
    movie.reviews.find_all{|review| review.viewer_id}.to_json(include: {viewers: {only: [:id, :name, :email]}})
  end
end
