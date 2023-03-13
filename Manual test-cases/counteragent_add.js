/*
@Title("Создание контрагента")
@Description("Добавление нового контрагента в систему")
@Feature("Контрагенты")
@Tags({@Tag("web"), @Tag("counteragents")})
@Preconditions("Авторизоваться в системе в роли Power user")
test counteragentAddWithValidData() {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Add");
    step("Заполнить предложенную строку валидными данными");
    step("Нажать кнопку Save");
    expect("Контрагент добавлен в систему и отображается в таблице");
}

test counteragentAddWithValidDataAndCancel () {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Add");
    step("Заполнить предложенные поля валидными данными");
    step("Нажать кнопку Cancel");
    expect("Строка создания контрагента убрана, данные в таблице не изменены");
}
*/
