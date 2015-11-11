class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all

    render json: @tracks
  end

  def create
    @track = Track.create!(track_params)

    render json: @track
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy!

    render json: @track
  end

  private

  def track_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    json_params.require(:track).permit(:name, :roll)
  end
end
