/*
@Title("Авторизация с невалидными данными")
@Description("Пользователь входит в систему, используя невалидные данные")
@Feature("Авторизация")
@Tags({@Tag("web"), @Tag("authorization")})
@Preconditions()
test userAuthorizationWithInvalidData() {
    step("Перейти на сайт Structure");
    step("Ввести валидный логин в поле Login");
    step("Ввести невалидный пароль в поле Password");
    step("Нажать кнопку Join");
    step("Ожидаемый результат: ошибка авторизации в систему,
        под полями формы авторизации отображается уведомление Invalid credentials");
}
*/
