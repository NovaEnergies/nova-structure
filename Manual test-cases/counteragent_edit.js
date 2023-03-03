/*
@Title("Создание контрагента")
@Description("Заполнение строки контрагента валидными данными и сохранение")
@Feature("Контрагенты")
@Tags({@Tag("web"), @Tag("counteragents")})
@Preconditions("Авторизоваться в системе в роли Power user")
test counteragentAddWithValidData() {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Add");
    step("Заполнить предложенную строку валидными данными");
    step("Нажать кнопку Save");
    step("Ожидаемый результат: контрагент добавлен в систему и отображается в таблице");
}

test counteragentAddWithValidDataAndCancel () {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Add");
    step("Заполнить предложение поля валидными данными");
    step("Нажать кнопку Cancel");
    step("Ожидаемый результат: строка создания контрагента убрана, данные в таблице не изменены");
}
*/
