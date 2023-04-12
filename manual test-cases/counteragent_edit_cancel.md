/*
@Title("Редактирование контрагента")
@Description("Заполнение строки контрагента валидными данными и сохранение изменений")
@Feature("Контрагенты")
@Tags({@Tag("web"), @Tag("counteragents")})
@Preconditions("Авторизоваться в системе в роли Power user")
test counteragentEditWithValidData() {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Edit в строке контрагента");
    step("Редактировать контрагента валидными данными");
    step("Нажать кнопку Save");
    expect("Изменённые данные контрагента применены и сохранены");
}
*/
