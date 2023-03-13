/*
@Title("Авторизация с пустым полем")
@Description("Пользователь входит в систему, не заполняя одно из полей для ввода")
@Feature("Авторизация")
@Tags({@Tag("web"), @Tag("authorization")})
@Preconditions()
test userAuthorizationWithEmptyField() {
    step("Перейти на сайт Structure");
    step("Ввести любой логин в поле Login");
    step("Оставить поле Password пустым");
    step("Нажать кнопку Join");
    expect("Кнопка Join недоступна для нажатия");
}
*/
