# This class is example of web page
class LoginPage < Howitzer::Web::Page
    path '/'
    validate :url, %r{\A(?:.*?:\/\/)?[^\/]*\/?\z}

    element :email_input, :fillable_field, 'email'
    element :senha_input, :fillable_field, 'senha'
    element :login_btn, :xpath, "//button[contains(text(),'Login')]"
    element :cadastro_btn, :xpath, "//button[contains(text(),'Cadastro')]"

    def efetuarLogin(email, senha)
        email_input_element.set(email)
        senha_input_element.set(senha)
        login_btn_element.click
    end
  end
