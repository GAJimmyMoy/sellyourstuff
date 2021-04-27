class UsersController < ApplicationController

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({id: @user.id })
      render json: {
        token: @token,
        user: @user.attributes.except('password_digest')
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
