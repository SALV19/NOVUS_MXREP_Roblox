# Estandar de codificación

Other references: [github](https://github.com/luarocks/lua-style-guide)

### Documentation
* Comments should be added on top, not in the same line
```lua
-- ✅ Good comment
local function my_function() do (...) end
local function my_function() do (...) end -- ❌ Bad comment
```
* Use tags TODO: when something needs to be implemented and FIXME: to indicate a bug or problem in existing code
```lua
-- TODO: my_function not implemented
local function my_function() do
	-- FIXME: check...
end
```

### Variable names
* Variables and function names should use `snake_case`
```lua	
-- ✅ Good variable name
local my_variable = 1
local this_is_my_object = {}
local function my_function () do 
	-- stuff
end
-- ❌ Bad variable name 
local myVariable = 1
local MyObject = {}
local c = function () 
	-- stuff
end
```
* Global values should start with a capital letter
* Local variables should begin with a lower variable
* Constants should be written in all capital letters
* Try the use of descriptive name in variables
* Always prefer using `local` variables
```lua
-- Upper case on global variables
Global = "Some global value"
-- lower case on local variables
local local_value = "Some local value"
-- All caps on constant values
local CONSTANT <const> = "my constant"
```
* Use `_` for ignored variables (e.g. for loops)
```lua
for _, item in ipairs(items) do
   do_something_with_item(item)
end
```
* If a function returns a boolean use the prefix `is_`
```lua
-- ❌ Bad
local function my_function(x) do 
	return 10 > x
end
-- ✅ Good
local function is_my_function(x) do 
	return 10 > x
end
```
### String
* Use `"double quotes"` for strings; use `'single quotes'` when writing strings that contain double quotes.
```lua
local name = "LuaRocks"
local sentence = 'The name of the program is "LuaRocks"'
```

### Functions
-   Prefer function syntax over variable syntax. This helps differentiate between named and anonymous functions.
```lua
-- ❌ Bad
local nope = function(name, options)
   -- ...stuff...
end
-- ✅ Good
local function yup(name, options)
   -- ...stuff...
end
```

* Perform validation early and return as early as possible.
```lua
-- ❌ Bad
local function is_good_name(name, options, arg)
   local is_good = #name > 3
   is_good = is_good and #name < 30

   -- ...stuff...
   
   return is_good
end

-- ✅ Good
local function is_good_name(name, options, args)
   if #name < 3 or #name > 30 then
      return false
   end

   -- ...stuff...

   return true
end
```
### Table attributes
* Dot notation to access attributes
```lua
local luke = {
   jedi = true,
   age = 28,
}
-- ❌ Bad
local is_jedi = luke["jedi"]
-- ✅ Good
local is_jedi = luke.jedi
```

### OOP
```lua
---  @module myproject.myclass
local  myclass  = {}

-- class table
local  MyClass  = {}

function  MyClass:some_method()
	-- code
	print("some_method")
end

function  MyClass:another_one()
	self:some_method()
	-- more code
end

function  myclass.new()
	local  self  = {}
	setmetatable(self, {__index  =  MyClass})
	return  self
end

local  class  =  myclass.new()
-- good
class:some_method()
```
