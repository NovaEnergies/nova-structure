/*
@Title("Авторизация с валидными данными")
@Description("Пользователь входит в систему, используя валидные данные")
@Feature("Авторизация")
@Tags({@Tag("web"), @Tag("authorization")})
@Preconditions()
test userAuthorizationWithValidData() {
    step("Перейти на сайт Structure");
    step("Ввести валидный логин в поле Login");
    step("Ввести валидный пароль в поле Password");
    step("Нажать кнопку Join");
    step("Ожидаемый результат: успешный вход в систему, переход на главную страницу");
}

test userLogoutStandard() {
    step("Нажать кнопку Logout");
    step("Ожидаемый результат: успешный выход из системы, переход на страницу авторизации")
}
*/