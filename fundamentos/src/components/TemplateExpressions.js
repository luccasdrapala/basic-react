const TemplateExpressions = () => {

    let name = 'Luccas';

    let obj = {
        age: 31,
        job: "dev"
    };

    return (
        <div>
            <h1>Meu nome eh {name}, minha porfissao eh {obj.job}</h1>
        </div>
    )
}

export default TemplateExpressions;