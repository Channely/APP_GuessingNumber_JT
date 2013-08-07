function compare_num(num1,num2){
    var similar_counts_of_num1_and_num2=0;
    var same_count_of_num1_and_num2=0;
    for(var i=0;i<4;i++){
        var num1_each_value=num1.charAt(i);
        var num2_each_value_to_judge_weather_are_same=num2.charAt(i);
        if(num1_each_value==num2_each_value_to_judge_weather_are_same){
            same_count_of_num1_and_num2++;
        }
        for(var j=0;j<4;j++){
            var num2_each_value=num2.charAt(j);
            if(num1_each_value==num2_each_value){
                similar_counts_of_num1_and_num2++;
            }
        }
    }
    return same_count_of_num1_and_num2+'A'+(similar_counts_of_num1_and_num2-same_count_of_num1_and_num2)+'B';
}
function random_a_num(){
    for(var h=0;the_same_counter!=4;h++){
        var random_num = Math.random();
        random_num = random_num*1e17;
        random_num = random_num.toString();
        random_num = random_num.substr(3,4);
        if(random_num.substr(0,1)=='0'){
            continue
        }else{
            var the_same_counter = get_the_similar_counter(JSON.stringify(random_num));
        }
        if(the_same_counter==4){
            return random_num;
        }
    }
}

function get_the_similar_counter(random_num){
    var the_same_counter=0;
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(random_num.charAt(i)==random_num.charAt(j)){
                the_same_counter++;
            }
        }
    }
    return the_same_counter
}
