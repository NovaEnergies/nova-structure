
@Title
@Description
@Feature
@Tags({@Tag("web"), @Tag("authorization")})
test userAuthorizationWithValidData() {
    step("Перейти на сайт Structure");
    step("Ввести валидный логин в поле Login");
    step("Ввести валидный пароль в поле Password");
    step("Нажать кнопку Join");
    step("Ожидаемый результат: успешный вход в систему");
}
