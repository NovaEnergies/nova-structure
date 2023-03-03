
@Title("Редактирование пользователя валидными данными")
@Description("Заполнение строки пользователя валидными данными и сохранение изменений")
@Feature("Пользователи")
@Tags({@Tag("web"), @Tag("users")})
@Preconditions("Авторизоваться в системе в роли Power user")
test userEditWithValidData() {
    step("Перейти на вкладку Users");
    step("Нажать кнопку Edit в строке пользователя");
    step("Редактировать пользователя валидными данными");
    step("Нажать кнопку Save");
    step("Ожидаемый результат: изменённые данные пользователя применены и сохранены");
}

test userEditCancel() {
    step("Перейти на вкладку Users");
    step("Нажать кнопку Edit в строке пользователя");
    step("Редактировать пользователя валидными данными");
    step("Нажать кнопку Cancel");
    step("Ожидаемый результат: изменённые данные пользователя восстановлены к исходным");
}