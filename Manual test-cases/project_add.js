/*
@Title("Создание проекта")
@Description("Добавление нового проекта в систему")
@Feature("Проекты")
@Tags({@Tag("web"), @Tag("projects")})
@Preconditions("Авторизоваться в системе в роли Power user")
test projectAddWithValidData() {
    step("Перейти на вкладку Project");
    step("Нажать кнопку Add");
    step("Заполнить предложенную строку валидными данными");
    step("Нажать кнопку Save");
    expect("Проект добавлен в систему и отображается в таблице");
}

test projectAddWithValidDataAndCancel () {
    step("Перейти на вкладку Projects");
    step("Нажать кнопку Add");
    step("Заполнить предложенные поля валидными данными");
    step("Нажать кнопку Cancel");
    expect(Строка создания проекта убрана, данные в таблице не изменены");
}
*/
