let alertString;
alertString = addString("WebCamp");

alert(alertString);


function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}


def divisor_sum(num, limit)
  (1..limit).select{ |i| num % i == 0 }.sum
end

puts divisor_sum(1234567890, 30000000)

def divisors(num)
  result = []
  (1..num).each do |i|
    if num % i == 0
      result << i
    end
  end
  result
end

def divisors(num)
  (1..num).select{ |i| num % i == 0 }
end

def divisor_sum(num, limit)
  (1..limit).select{ |i| num % i == 0 }.sum
end

puts divisor_sum(1234567890, 30000000)

